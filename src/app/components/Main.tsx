export function Main() {
  return (
    <main className="flex flex-row p-3 justify-between h-75%">
      <div className="flex flex-col w-75% mr-4">
        main
        <section className="first: border-solid border-x-4 border-y-4 border-yellow-500 p-2 m-3 text-yellow-500 h-75%">
          section
          <article className="border-solid border-x-4 border-y-4 h-25% p-2 border-blue-500 text-blue-500">
            article
          </article>
          <article className="border-solid border-x-4 border-y-4 h-25% p-2 border-blue-500 text-blue-500">
            article
          </article>
          <article className="border-solid border-x-4 border-y-4 h-25% p-2 border-blue-500 text-blue-500">
            article
          </article>
        </section>
        <section className="last: border-solid border-x-4 border-y-4 border-yellow-500 p-2 m-3 text-yellow-500 h-25%">
          section
        </section>
      </div>
      <aside className="flex flex-col border-solid border-x-4 border-y-4 p-5 w-1/4 text-center border-yellow-500 text-yellow-500">
        aside
        <section className="border-solid border-x-4 border-y-4 p-2 mt-3 h-30% text-blue-500 border-blue-500">
          section
        </section>
        <section className="border-solid border-x-4 border-y-4 p-2 mt-3 h-30% text-blue-500 border-blue-500">
          section
        </section>
      </aside>
    </main>
  );
}
