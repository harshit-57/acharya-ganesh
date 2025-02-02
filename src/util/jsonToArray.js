// Generic utility function to handle nested JSON without flattening
export const jSONToArray = (json) => {
    if (Array.isArray(json)) {
        // If the current item is an array, recursively process each element
        return json.map((item) => jSONToArray(item));
    }

    // If it's an object, recursively process its keys
    if (typeof json === 'object' && json !== null) {
        const result = {}; // The object we are going to build

        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                const value = json[key];

                // If the value is an object or array, recurse
                if (Array.isArray(value) || typeof value === 'object') {
                    result[key] = jSONToArray(value);
                } else {
                    // Otherwise, simply assign the value
                    result[key] = value;
                }
            }
        }

        return result; // Return the processed object
    }

    return json; // Return primitive values as they are (string, number, etc.)
};
