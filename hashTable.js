class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function to compute the index for a key
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i); // adding ascii value to each character

        }
        return hash % this.size; // return index within bounds of the table size    

    }

    // Set a key-value pair in the hash table
    set(key, value) {
        const index = this.hash(key); // Get the index for the key
        this.table[index] = [key, value]; // Store the key-value pair at the computed index

    }

    get(key) {
        const index = this.hash(key); // Get the index for the key
        const pair = this.table[index]; // Get whatever is stored at that index
        if (pair && pair[0] === key) { // Check if the key matches
            return pair[1]; // Return the value (second element of the pair if found
        }
        return undefined; // Return the value if found, otherwise undefined
    }

    remove(key) {
        const index = this.hash(key); // Get the index for the key
        this.table[index] = undefined; // Remove the key-value pair by setting it to undefined
    }


    display() {
        console.log(this.table); // Display the entire hash table
    }


}

const ht = new HashTable();
ht.set("name", "himanshu")
ht.set("age", 25);
ht.set("city", "New York");
console.log(ht.get("name"));
console.log(ht.get("age"));
console.log(ht.get("city"));

ht.display(); // Display the hash table contents