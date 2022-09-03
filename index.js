
// Create 16 byte buffer
// Default value is 0
let buffer = new ArrayBuffer(16);

// Data view are required to manipulate array buffer
// Get the whole buffer
let dv1 = new DataView(buffer);

// Start from 10th Slot and get 3 bytes
let dv2 = new DataView(buffer, 10, 3);

// Set value 42 at 11th slot 
dv1.setInt8(11, 42);

// First slot of dv2 is 11th slot of buffer. Get that
let num = dv2.getInt8(1);
console.log(num); //42

// Create array with 10 elements
let int8Array = new Int8Array(10);
int8Array[0] = 129;

console.log(int8Array);