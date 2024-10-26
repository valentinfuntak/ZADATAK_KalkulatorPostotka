import { createSignal, onCleanup } from "solid-js";
import "../css/errorMessage.css";

function ErrorMessage({ message, onClose }) {
  const [visible, setVisible] = createSignal(true);
  setTimeout(() => {
    setVisible(false);
    onClose();
  }, 4000);

  onCleanup(() => clearTimeout());

  return (
    visible() && (
      <div class="error-popup">
        <p>{message}</p>
        <button onClick={onClose}>×</button>
      </div>
    )
  );
}

export default ErrorMessage;
