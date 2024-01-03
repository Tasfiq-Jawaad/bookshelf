import Card from "@/components/homePage/Card";

const page = () => {
  return (
    <section className="px-5 mt-5">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl">Showing results for snacks</h2>
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Filter
            </label>
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
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Sort by</div>
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
