# axios를 통한 서버통신을 할때, 이런식으로 사용한다.

```javascript
import { SERVER } from 'config/config.json';
import axios from 'axios';

axios.get(`${SERVER}/member`);
```
