let step = 100;

let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r-   ', '\r|   ']

for (const pos of spinner) {
  setTimeout(() => {
    process.stdout.write(pos);
  }, step);
  step += 200;
}