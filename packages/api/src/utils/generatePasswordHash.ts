const bcrypt = require("bcrypt");

export async function generatePasswordHash(passwordToHash: string) {
    // Hash the password
    return await bcrypt.hash(passwordToHash, 15);
};