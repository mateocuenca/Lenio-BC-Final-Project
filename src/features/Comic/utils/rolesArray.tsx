// Function to categorize items into roles
const categorizeItemsByRole = (items: any) => {
  return items.reduce(
    (result: any, item: any) => {
      switch (item.role) {
        case "writer":
          result.writers.push(item.name);
          break;
        case "penciller":
          result.pencillers.push(item.name);
          break;
        case "editor":
          result.editors.push(item.name);
          break;
        default:
          // Handle other roles if needed...
          break;
      }
      return result;
    },
    { writers: [], pencillers: [], editors: [] }
  );
};

export { categorizeItemsByRole };
