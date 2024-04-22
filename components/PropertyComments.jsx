import Image from "next/image";

const PropertyComments = () => {
  return (
    <div className="antialiased mx-auto max-w-screen-sm text-xs">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">Comments</h3>

      <div className="space-y-4">
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <Image
              width={3}
              height={3}
              className="mt-2 rounded-full w-6 h-6 sm:w-8 sm:h-8"
              src="https://Images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 border rounded-lg px-3 py-1 sm:px-5 sm:py-3 leading-relaxed">
            <strong>Sarah</strong>{" "}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex -space-x-2 mr-2">
                <Image
                  width={3}
                  height={3}
                  className="rounded-full w-4 h-4 border border-white"
                  src="https://Images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt=""
                />
                <Image
                  width={3}
                  height={3}
                  className="rounded-full w-4 h-4 border border-white"
                  src="https://Images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt=""
                />
              </div>
              <div className="text-xs text-gray-500 font-semibold">
                5 Replies
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <Image
              width={3}
              height={3}
              className="mt-2 rounded-full w-6 h-6 sm:w-8 sm:h-8"
              src="https://Images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 border rounded-lg px-3 py-1 sm:px-5 sm:py-3 leading-relaxed">
            <strong>Sarah</strong>{" "}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
              Replies
            </h4>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <Image
                    width={3}
                    height={3}
                    className="mt-3 rounded-full w-4 h-4 sm:w-6 sm:h-6"
                    src="https://Images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-3 py-1 sm:px-5 sm:py-3 leading-relaxed">
                  <strong>Sarah</strong>{" "}
                  <span className="text-xs text-gray-400">3:34 PM</span>
                  <p className="text-xs sm:text-xs">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <Image
                    width={3}
                    height={3}
                    className="mt-3 rounded-full w-4 h-4 sm:w-6 sm:h-6"
                    src="https://Images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-3 py-1 sm:px-5 sm:py-3 leading-relaxed">
                  <strong>Sarah</strong>{" "}
                  <span className="text-xs text-gray-400">3:34 PM</span>
                  <p className="text-xs sm:text-xs">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyComments;
