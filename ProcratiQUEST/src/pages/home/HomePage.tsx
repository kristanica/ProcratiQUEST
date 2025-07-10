import NavigationBar from "../../assets/components/global/NavigationBar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0114] flex ">
      <NavigationBar />
      <main className="flex-1 p-6">
        <p className="text-white text-xl">This is homepage</p>
      </main>
    </div>
  );
};

export default HomePage;
