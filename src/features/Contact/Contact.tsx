import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xblkozlp");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (state.submitting) {
      setStatus("sending");
    } else if (state.succeeded) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else if (Object.keys(state.errors || {}).length > 0) {
      setStatus("error");
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-background text-text flex items-center justify-center"
    >
      <div className="w-full max-w-xl bg-card rounded-xl shadow-md p-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Contacto</h2>
        <p className="text-textMuted mb-8 text-center">
          ¿Querés trabajar conmigo, hacerme una propuesta o simplemente charlar?
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            placeholder="Tu nombre"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-background border border-gray-600 text-text placeholder:text-textMuted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            placeholder="tunombre@correo.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-background border border-gray-600 text-text placeholder:text-textMuted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            rows={4}
            value={formData.message}
            required
            placeholder="¿En qué puedo ayudarte?"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-background border border-gray-600 text-text placeholder:text-textMuted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={
              state.submitting ||
              !formData.name.trim() ||
              !formData.email.trim() ||
              !formData.message.trim()
            }
            className="w-full bg-primary hover:bg-primaryHover text-white font-semibold py-2 px-4 rounded-md transition disabled:opacity-50"
          >
            Enviar mensaje
          </button>

          {/* Mensajes de estado */}
          {status === "sending" && (
            <p className="text-sm text-blue-400 text-center animate-pulse mt-2">
              Enviando mensaje...
            </p>
          )}
          {status === "success" && (
            <p className="text-sm text-green-400 text-center mt-2">
              ¡Mensaje enviado con éxito!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center mt-2">
              Ocurrió un error. Por favor intentá de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
