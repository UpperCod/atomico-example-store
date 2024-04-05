import { c } from 'atomico';
import { SiteIsotype, SiteText, SiteGrid } from '@atomico/site';

function myComponent() {
  return (
    <host>
      <SiteIsotype>
        <SiteGrid gap={3} centered>
          <img
            width="100%"
            src="https://raw.githubusercontent.com/atomicojs/site/master/src/assets/logo.svg"
          />
          <SiteText elegant color="accent">
            WEBCOMPONENTS
          </SiteText>
          <SiteText textCenter>
            Build interfaces with simple,
            <br />
            fast and light code
          </SiteText>
        </SiteGrid>
      </SiteIsotype>
    </host>
  );
}

const MyComponent = c(myComponent);

customElements.define('my-component', MyComponent);
