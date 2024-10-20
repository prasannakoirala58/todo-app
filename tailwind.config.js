module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        primary: '#173E66', // Cyan
        success: '#10B981', // Green for buttons
        warning: '#F59E0B', // Amber for warnings
        danger: '#EF4444', // Red for delete buttons
        textPrimary: '#1F2937', // Dark Gray for text
      },
    },
  },
  plugins: [],
};
