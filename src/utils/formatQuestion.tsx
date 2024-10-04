export default function formatQuestion(question: string) {
  return question.replace(/(&quot;|&apos;|&#039|&amp;|&lt;|&gt;)/g, (match) => {
    switch (match) {
      case "&quot;":
      case "&apos;":
      case "&#039;":
        return "'";
      case "&amp;":
        return "&";
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      default:
        return match;
    }
  });
}
