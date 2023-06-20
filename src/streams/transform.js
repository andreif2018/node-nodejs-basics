import { Transform } from 'stream';

const transform = async () => {
    const trStream = new Transform ({
        transform(chunk, encoding, callback) {
          this.push(chunk.toString().split('').reverse().join(''));
          callback();
        }
      });
      await process.stdin.pipe(trStream).pipe(process.stdout);
};

await transform();