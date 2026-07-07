import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRegister } from "../hooks/useRegister";

import {
  User,
  Phone,
} from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";

import {
  showSuccess,
  showError,
} from "../lib/toast";

function Register() {

  const navigate = useNavigate();

  const registerMutation = useRegister();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (registerMutation.isPending) return;

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      return showError(
        "Passwords do not match."
      );

    }

    try {

      await registerMutation.mutateAsync({
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        password: formData.password,
      });

      showSuccess(
        "Account created successfully."
      );

      navigate("/login", {
        replace: true,
      });

    } catch (error) {

      showError(
        error?.response?.data?.message ||
        "Registration failed."
      );

    }

  };

  return (

    <AuthLayout>

      <AuthHeader
        title="Create Account"
        subtitle="Start managing smarter packing workflows with AI."
      />

      <AuthCard>

        <form
          onSubmit={handleSubmit}
          className="space-y-2"
        >

          <AuthInput
            label="Full Name"
            icon={User}
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

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
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <div className="pt-2">

            <AuthButton
              loading={registerMutation.isPending}
              loadingText="Creating Account..."
            >
              Create Account
            </AuthButton>

          </div>

        </form>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign In"
          to="/login"
        />

      </AuthCard>

    </AuthLayout>

  );

}

export default Register;