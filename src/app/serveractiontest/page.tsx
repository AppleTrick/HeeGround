import { sayHello } from "@/lib/action";

const ServerActionTestPage = () => {
  const actionComponent = async () => {
    "use server";
    console.log("서버에서 작동");
  };

  return (
    <div>
      <form action={sayHello}>
        <button>Test me</button>
      </form>
      <button onClick={actionComponent}> 서버 작동</button>
    </div>
  );
};

export default ServerActionTestPage;
