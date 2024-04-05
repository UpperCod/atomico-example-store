import { c } from 'atomico';
import { Button } from '@formas/components';

const MyStore = c(()=>{
  return <host>
    <Button>welcomels</Button>
  </host>
});

customElements.define('my-store', MyStore);
