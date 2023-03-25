import { TrashIcon } from "@heroicons/react/24/outline";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import React from "react";

export const DashboardNewBoard = () => {
  const form = useForm({
    initialValues: {
      catlogs: [],
    },
  });

  const fields = form.values.catlogs.map((item, index) => (
    <div key={index.toString()}>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-4 mt-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="name"
              {...form.getInputProps(`catlogs.${index}.name`)}
              id="name"
              placeholder="ABC Product"
              autoComplete="name"
              className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              {...form.getInputProps(`catlogs.${index}.description`)}
              rows={3}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="sm:col-span-4 mt-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Pice
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              name="price"
              id="price"
              {...form.getInputProps(`catlogs.${index}.price`)}
              placeholder="1000"
              autoComplete="price"
              className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="sm:col-span-4 mt-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Link to Product
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="https://example.com"
              {...form.getInputProps(`catlogs.${index}.link`)}
              autoComplete="url"
              className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            form.removeListItem("catlogs", index);
          }}
          className="inline-flex items-center rounded-full border border-transparent bg-red-600 p-1 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          <TrashIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200"
      onSubmit={form.onSubmit((values) => {
      })}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Add information description your business to help customers find
                you.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Name
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg rounded-md shadow-sm">
                    <input
                      type="text"
                      name="name"
                      {...form.getInputProps("name")}
                      id="name"
                      placeholder="ABC Company"
                      autoComplete="name"
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Write a few sentences about your business this will help bot to understand your business."
                  maxLength={4000}
                  rows={3}
                  {...form.getInputProps("description")}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Support Email
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  id="email"
                  name="email"
                  {...form.getInputProps("email")}
                  type="email"
                  placeholder="This email will be used for support purpose."
                  autoComplete="email"
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Catlog
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Feed your bot with your products and services to help customers
              find you. You can add more later. (Optional)
            </p>
          </div>
          {fields}
          <button
            type="button"
            onClick={() => {
              form.insertListItem("catlogs", {
                name: "",
                active: false,
                key: randomId(),
              });
            }}
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
