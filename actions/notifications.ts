import { messaging } from "@/lib/firebase-admin";

export async function sendAdminPushNotification(title: string, body: string, data?: Record<string, string>) {
  try {
    const message = {
      notification: {
        title,
        body,
      },
      data,
      topic: "admin_notifications", // The Android app will subscribe to this topic
    };

    const response = await messaging.send(message);
    console.log("Successfully sent message:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
