# Timestamp microservice

## User stories:

> 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
> 2. If it does, it returns both the Unix timestamp and the natural language form of that date.
> 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example usage:

[/September 10, 2020](http://timestamp-nlr.herokuapp.com/September%2010,%202020)  
[/1599678000](http://timestamp-nlr.herokuapp.com/1599678000)

### Example output:

```JSON
{
  "unix": 1599678000,
  "natural": "September 10, 2020"
}
```

### Demo

[timestamp microservice](http://timestamp-nlr.herokuapp.com/)
