export default function createInt8typedArray(length, position, value) {
	if (position < 0 || position >= length) {
		throw new Error('Position outside range');
	}

	const buffer = new ArrayBuffer(length);
	const int8Array = new Int8Array(buffer);
	int8Array[position] = value;

	return buffer;
}
