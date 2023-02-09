const bcrypt = require("bcrypt");

export async function generatePasswordHash(passwordToHash: string) {
    // Generate Salt
    const salt = await bcrypt.genSalt(15);
    // Hash the password
    return await bcrypt.hash(passwordToHash, salt);
};