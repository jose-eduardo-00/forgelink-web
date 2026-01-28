import { useState } from "react";
import BackgroundImage from "../../../assets/loginImg.jpg";
import { Link2, Copyright } from "lucide-react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("maker");

  return (
    <main className="flex">
      <div className="w-1/2 relative h-screen overflow-hidden bg-zinc-950 p-14 flex flex-col justify-between">
        <img
          src={BackgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30" />

        <div className="relative z-20 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500">
            <Link2 className="w-5 h-5 text-zinc-950" />
          </div>
          <h1 className="text-white text-xl font-medium">ForgeLink</h1>
        </div>
        <div className="relative z-20 flex flex-col gap-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight text-balance">
            Transforme sua impressora <br /> em um negócio.
          </h1>
          <p className="text-lg text-zinc-400 max-w-md">
            Junte-se a milhares de criadores que monetizam seu trabalho.
            Conecte-se com cosplayers, designers e colecionadores do mundo todo.
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <h1 className="text-white text-2xl font-bold">12k+</h1>
              <span className="text-zinc-500 text-sm">Criadores Ativos</span>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">85k+</h1>
              <span className="text-zinc-500 text-sm">Pedidos concluídos</span>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">$2.4M</h1>
              <span className="text-zinc-500 text-sm">
                Pago aos fabricantes
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-20 flex items-center gap-2">
          <Copyright size={16} className="text-sm text-zinc-600" />
          <span className="text-zinc-600">
            2025 ForgeLink. Todos os direitos reservados.
          </span>
        </div>
      </div>
      <div className="w-1/2 p-14">
        <div className="flex flex-col px-10 py-12">
          <div className="flex items-center justify-center p-1 bg-zinc-100 rounded-lg">
            <button
              onClick={() => setActiveTab("maker")}
              className={`flex-1 text-center py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === "maker"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Eu sou um criador
            </button>
            <button
              onClick={() => setActiveTab("cosplayer")}
              className={`flex-1 text-center py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === "cosplayer"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Eu sou um comprador
            </button>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-900 mt-8">
            Bem-vindo de volta!
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            {activeTab === "maker"
              ? "Comece a vender suas impressões e designs em 3D."
              : "Encontre os criadores para o seu próximo projeto de cosplay."}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
