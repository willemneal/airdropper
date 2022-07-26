
export function clamp_guest(i, min, max) {
  if (i < min || i > max) throw new RangeError(`must be between ${min} and ${max}`);
  return i;
}

export function clamp_host(i, min, max) {
  if (!Number.isInteger(i)) throw new TypeError(`must be an integer`);
  if (i < min || i > max) throw new RangeError(`must be between ${min} and ${max}`);
  return i;
}

export function clamp_host64(i, min, max) {
  if (typeof i !== 'bigint') throw new TypeError(`must be a bigint`);
  if (i < min || i > max) throw new RangeError(`must be between ${min} and ${max}`);
  return i;
}

let DATA_VIEW = new DataView(new ArrayBuffer());

export function data_view(mem) {
  if (DATA_VIEW.buffer !== mem.buffer) DATA_VIEW = new DataView(mem.buffer);
  return DATA_VIEW;
}

export function validate_flags(flags, mask) {
  if (!Number.isInteger(flags)) throw new TypeError('flags were not an integer');
  if ((flags & ~mask) != 0)
  throw new TypeError('flags have extraneous bits set');
  return flags;
}
export const UTF8_DECODER = new TextDecoder('utf-8');

const UTF8_ENCODER = new TextEncoder('utf-8');

export function utf8_encode(s, realloc, memory) {
  if (typeof s !== 'string') throw new TypeError('expected a string');
  
  if (s.length === 0) {
    UTF8_ENCODED_LEN = 0;
    return 1;
  }
  
  let alloc_len = 0;
  let ptr = 0;
  let writtenTotal = 0;
  while (s.length > 0) {
    ptr = realloc(ptr, alloc_len, 1, alloc_len + s.length);
    alloc_len += s.length;
    const { read, written } = UTF8_ENCODER.encodeInto(
    s,
    new Uint8Array(memory.buffer, ptr + writtenTotal, alloc_len - writtenTotal),
    );
    writtenTotal += written;
    s = s.slice(read);
  }
  if (alloc_len > writtenTotal)
  ptr = realloc(ptr, alloc_len, 1, writtenTotal);
  UTF8_ENCODED_LEN = writtenTotal;
  return ptr;
}
export let UTF8_ENCODED_LEN = 0;
