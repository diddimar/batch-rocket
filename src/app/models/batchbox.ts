import { Firebox } from './firebox';
import { Riser } from './riser';
import { Port } from './port';
import { Channel } from './channel';
import { Primary } from './primary';

export class BatchBox {
  public firebox: Firebox;
  public riser: Riser;
  public port: Port;
  public channel: Channel;
  public primary: Primary;
}