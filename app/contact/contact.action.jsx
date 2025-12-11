"use server";

import { fetchFromAPI } from "@/lib/api";

export async function contactAction(formData) {
  const {name,email,phone,subject,message} = Object.fromEntries(formData.entries());
  const data = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

    try {
        const response = await fetchFromAPI("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        return { success: response.status, message: response.message ?? "Message sent successfully!" };
    } catch (error) {
        return { success: false, message: response.message ?? "Something went wrong." };
    }  
}
