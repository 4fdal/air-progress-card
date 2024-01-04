import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },

    plugins: [require("daisyui")],
};
