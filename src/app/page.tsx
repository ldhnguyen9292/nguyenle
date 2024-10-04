export default function Home() {
  return (
    <div>
      <h1 className="font-heading">Hello</h1>
      <p className="font-body">World</p>
      <section>
        <p>Colors</p>
        <div className="bg-primary-0 p-5 m-5 text-secondary-0">BG Primary 0</div>
        <div className="bg-primary-1 p-5 m-5 text-secondary-1">BG Primary 1</div>
        <div className="bg-primary-2 p-5 m-5 text-secondary-1">BG Primary 2</div>
        <div className="bg-secondary-0 p-5 m-5">BG Secondary 0</div>
        <div className="bg-secondary-1 p-5 m-5">BG Secondary 1</div>
        <div className="bg-secondary-2 p-5 m-5">BG Secondary 2</div>
        <div className="bg-tertiary-0 p-5 m-5">BG Tertiary 0</div>
      </section>
    </div>
  );
}
