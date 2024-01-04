import Card from "@/components/homePage/Card";

const page = () => {
  return (
    <section className="px-5 mt-5">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-bold text-2xl">Showing results for snacks</h2>
            <div className="flex gap-4">
              <select className="select select-ghost w-full max-w-xs">
                <option disabled selected>
                  Sort by
                </option>
                <option>Featured</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
                <option>Newest</option>
              </select>
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
              >
                Filter
              </label>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-5 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button flex w-min ml-auto"
            >
              X
            </label>

            {/* <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" name="my-accordion-2" />
              <select className="select select-ghost w-full max-w-xs text-xl font-medium">
                <option disabled selected>
                  Sort by
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div> */}

            {/* 2nd */}

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" name="my-accordion" />
              <div className="collapse-title text-xl font-medium">Brands</div>
              <div className="collapse-content">
                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 1
                  </label>
                </div>

                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 2
                  </label>
                </div>

                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 3
                  </label>
                </div>

                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 4
                  </label>
                </div>

                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 5
                  </label>
                </div>

                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 6
                  </label>
                </div>

                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 7
                  </label>
                </div>

                <div>
                  <input
                    className="w-min"
                    id="brand1"
                    type="checkbox"
                    name="my-accordion"
                    value={"Brand 1"}
                  />
                  <label htmlFor="brand1" className="ms-2">
                    Brand 8
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
