import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

import { Phone } from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";

function Login() {

    const navigate = useNavigate();
    const { setUser } = useAuth();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        mobile: "",
        password: "",
    });

    const handleChange = (e) => {

        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (loading) return;

        try {

            setLoading(true);

            const { data } = await api.post(
                "/auth/login",
                formData
            );

            setUser(data.user);

            navigate("/dashboard", {
                replace: true,
            });

        } catch (error) {

            alert(
                error?.response?.data?.message ||
                "Login failed."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <AuthLayout>

            <AuthHeader
                title="Welcome Back"
                subtitle="Sign in to continue managing your AI-powered packing workflow."
            />

            <AuthCard>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-2"
                >

                    <AuthInput
                        label="Mobile Number"
                        icon={Phone}
                        name="mobile"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength={10}
                        required
                    />

                    <PasswordInput
                        label="Password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />

                    <div className="flex justify-end">

                        <button
                            type="button"
                            className="
                                text-sm
                                font-medium
                                text-[#7F9E2F]
                                transition-colors
                                hover:text-[#5F7A20]
                            "
                        >
                            Forgot Password?
                        </button>

                    </div>

                    <div className="pt-2">

                        <AuthButton
                            loading={loading}
                            loadingText="Signing In..."
                        >
                            Sign In
                        </AuthButton>

                    </div>

                </form>

                <AuthFooter
                    text="New to FlowZen?"
                    linkText="Create Account"
                    to="/register"
                />

            </AuthCard>

        </AuthLayout>

    );

}

export default Login;