<template>
  <div>
    <div class="mt-10 pt-10 container mx-auto" style="height: 30em;">
      <div class="grid grid-x-1 grid-y-1">
        <form action="">
          <div class="mb-6">
            <label
              for="default-input"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-dark
              "
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
          </div>
          <div class="mb-6">
            <label
              for="default-input"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-dark
              "
              >Email</label
            >
            <input
              type="text"
              id="email"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-dark
              "
              >Your message</label
            >
            <textarea
              id="message"
              rows="4"
              class="
                block
                p-2.5
                w-full
                text-sm text-gray-900
                bg-gray-50
                rounded-lg
                border border-gray-300
                focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
