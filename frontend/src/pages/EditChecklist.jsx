import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../api/axios";

import EditHeader from "../components/edit-checklist/EditHeader";
import EditableItemCard from "../components/edit-checklist/EditableItemCard";
import AddItemButton from "../components/edit-checklist/AddItemButton";
import SaveBar from "../components/edit-checklist/SaveBar";

function EditChecklist() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [checklist, setChecklist] = useState([]);
    const [originalChecklist, setOriginalChecklist] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchChecklist();
    }, []);

    const fetchChecklist = async () => {
        try {
            setLoading(true);

            const { data } = await api.get(
                `/checklists/${id}`
            );

            setChecklist(data.items);
            setOriginalChecklist(data.items);

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleItemChange = (
        itemId,
        field,
        value
    ) => {
        setChecklist((prev) =>
            prev.map((item) =>
                item._id === itemId
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            )
        );
    };

    const handleDelete = (itemId) => {
        const item = checklist.find(
            (i) => i._id === itemId
        );

        if (!item.isNew) {
            setDeletedItems((prev) => [
                ...prev,
                itemId,
            ]);
        }

        setChecklist((prev) =>
            prev.filter(
                (item) => item._id !== itemId
            )
        );
    };

    const handleAddItem = () => {
        setChecklist((prev) => [
            ...prev,
            {
                _id: `new-${Date.now()}`,
                itemName: "",
                quantity: 1,
                unit: "kg",
                completed: false,
                isNew: true,
            },
        ]);
    };

    const isValidChecklist =
        checklist.length > 0 &&
        checklist.every(
            (item) =>
                item.itemName.trim() !== "" &&
                Number(item.quantity) > 0
        );

    if (loading) {
        return (
            <div className="mx-auto max-w-md min-h-screen bg-gray-50 animate-pulse">

                <div className="h-20 bg-white border-b" />

                <div className="space-y-5 p-5">

                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="rounded-3xl bg-white p-5 shadow-sm"
                        >
                            <div className="h-5 w-32 rounded bg-gray-200" />

                            <div className="mt-5 h-12 rounded-xl bg-gray-200" />

                            <div className="mt-5 grid grid-cols-2 gap-4">

                                <div className="h-12 rounded-xl bg-gray-200" />

                                <div className="h-12 rounded-xl bg-gray-200" />

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        );
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 20,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: .35,
            }}
            className="mx-auto max-w-md min-h-screen bg-gray-50 pb-36"
        >

            <EditHeader />

            <motion.div
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: .15,
                }}
                className="px-5 pt-5"
            >

                <p className="text-gray-500 text-sm">
                    Review the AI generated checklist.
                    You can edit names, quantities,
                    units, delete incorrect items or
                    add missing products before
                    packing.
                </p>

            </motion.div>

            <div className="mt-5 px-5">

                <AnimatePresence>

                    {checklist.map(
                        (item, index) => (
                            <motion.div
                                key={item._id}
                                layout
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: .95,
                                }}
                                transition={{
                                    duration: .25,
                                }}
                                className="mb-5"
                            >

                                <EditableItemCard
                                    item={item}
                                    index={index}
                                    onChange={
                                        handleItemChange
                                    }
                                    onDelete={
                                        handleDelete
                                    }
                                />

                            </motion.div>
                        )
                    )}

                </AnimatePresence>

                <AddItemButton
                    onAdd={handleAddItem}
                />

            </div>
            <SaveBar
                loading={saving}
                disabled={!isValidChecklist}
                onCancel={() => navigate(-1)}
                onSave={handleSave}
            />

        </motion.div>
    );

    async function handleSave() {
        if (saving) return;

        try {
            setSaving(true);

            const requests = [];

            // Delete removed items
            for (const itemId of deletedItems) {
                requests.push(
                    api.delete(`/checklists/${itemId}`)
                );
            }

            // Create & Update items
            for (const item of checklist) {
                const payload = {
                    itemName: item.itemName.trim(),
                    quantity: Number(item.quantity),
                    unit: item.unit.trim(),
                };

                // Skip invalid rows
                if (
                    !payload.itemName ||
                    payload.quantity <= 0
                ) {
                    continue;
                }

                // Create new item
                if (item.isNew) {
                    requests.push(
                        api.post(
                            `/checklists/${id}`,
                            payload
                        )
                    );

                    continue;
                }

                // Find original item safely
                const original = originalChecklist.find(
                    (i) => i._id === item._id
                );

                if (!original) continue;

                const changed =
                    original.itemName !== payload.itemName ||
                    Number(original.quantity) !==
                    payload.quantity ||
                    original.unit !== payload.unit;

                // Update only changed items
                if (changed) {
                    requests.push(
                        api.put(
                            `/checklists/${item._id}`,
                            payload
                        )
                    );
                }
            }

            // Execute all API requests in parallel
            await Promise.all(requests);

            // Navigate back to Order Details
            navigate(`/orders/${id}`, {
                replace: true,
            });

        } catch (err) {
            console.error(err);

            alert(
                err?.response?.data?.message ||
                "Failed to save checklist."
            );

        } finally {
            setSaving(false);
        }
    }
}

export default EditChecklist;