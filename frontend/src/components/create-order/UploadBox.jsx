import {
    Upload,
    Camera,
} from "lucide-react";

function UploadBox({
    file,
    setFile,
}) {
    const handleFile = (e) => {
        if (!e.target.files?.[0]) return;

        setFile(e.target.files[0]);
    };

    return (
        <div className="mt-6">

            <label className="text-[15px] text-gray-600  font-bold">
                Upload Order List
            </label>

            <label
                htmlFor="file-upload"
                className="mt-3 flex h-38 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-background"
            >
                {file ? (
                    <img
                        src={URL.createObjectURL(file)}
                        alt=""
                        className="h-full w-full rounded-2xl object-cover"
                    />
                ) : (
                    <>
                        <Upload
                            className="text-primary"
                            size={34}
                        />

                        <p className="mt-3  font-bold text-primary">
                            Upload Order Photo
                        </p>

                        <p className="text-sm text-muted-foreground">
                            WhatsApp Screenshot,
                            Image or PDF
                        </p>
                    </>
                )}
            </label>
            <p className="text-center pt-3 font-semibold text-gray-600">or</p>
            <input
                hidden
                id="file-upload"
                type="file"
                accept="image/*,.pdf"
                onChange={handleFile}
            />

            {/* Camera Button */}

            <label
                htmlFor="camera-upload"
                className="mt-3 flex h-12 cursor-pointer font-bold items-center justify-center gap-2 rounded-xl border border-primary text-primary "
            >
                <Camera size={18} />
                Take Photo
            </label>

            <input
                hidden
                id="camera-upload"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFile}
            />

        </div>
    );
}

export default UploadBox;