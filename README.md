# Dayjs Greet Plugin

A greeting plugin for Dayjs

## Usage

```js
import dayjs from 'dayjs'
import dayjsGreetPlugin from './dayjsGreetPlugin'
dayjs.extend(dayjsGreetPlugin)

dayjs().greet()
dayjs().add(8, 'hour').greet()
```
