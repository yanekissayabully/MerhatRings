// "use server"

// export async function sendMessage(formData: FormData) {
//   // Simulate server-side processing (e.g., send email or store in DB)
//   // In real life, integrate with your email provider here.
//   const name = String(formData.get("name") || "")
//   const email = String(formData.get("email") || "")
//   const message = String(formData.get("message") || "")
//   await new Promise((res) => setTimeout(res, 600))

//   // Basic validation
//   if (!name || !email || !message) {
//     return { ok: false, error: "Пожалуйста, заполните все поля формы." }
//   }

//   // Return a success response
//   return {
//     ok: true,
//     message: "Спасибо! Мы получили ваше сообщение и свяжемся с вами в ближайшее время.",
//   }
// }
