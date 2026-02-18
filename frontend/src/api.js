// export async function explainNews(text) {
//   // mock implementation, so you can see the UI working
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(
//         `Mock explanation for:\n\n${text}\n\n` +
//           "Summary: This is where the real summary will go.\n\n" +
//           "ELI15: This is a simplified explanation.\n\n" +
//           "Key terms: interest rate, inflation, GDP."
//       );
//     }, 800);
//   });
// }

const API_BASE_URL = "http://127.0.0.1:8000";

export async function explainNews(text) {
  const res = await fetch(`${API_BASE_URL}/api/explain`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error(`Backend error: ${res.status}`);
  }

  const data = await res.json();
  return data.explanation;
}