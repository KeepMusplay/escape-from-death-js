import { NearBindgen, near, call, view } from 'near-sdk-js';

@NearBindgen({})
class HelloNear {
  greeting: string = "";

  @view({}) // This method is read-only and can be called for free
  get_ranking(): string {
    return this.greeting;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_ranking({ message }: { message: string }): void {
    // Record a log permanently to the blockchain!
    near.log(`Saving greeting ${message}`);
    this.greeting = message;
  }
}