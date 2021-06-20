# WARNING: under development

Example:

```html
<api-ref title="Login request" verb="post" route="/api/login" :response-codes="[200, 401]">
    <template v-slot:description>
        From here you can send your email and password and recieve token for authrizing
    </template>
    <template v-slot:body>
        <api-ref-item name="username" :required="true" type="string">
            The unique username
        </api-ref-item>
        <api-ref-item name="password" :required="true" type="string">
            Your password
        </api-ref-item>
    </template>
    <template v-slot:headers>
        <api-ref-item name="Accept" :required="true" type="string" example="application/json">
            Accept json responses
        </api-ref-item>
    </template>
    <template v-slot:200>
        <pre>
{
    "message": "Success",
    "token": "123"
}
        </pre>
    </template>
    <template v-slot:401>
        <pre>
{
    "message": "Unauthorized"
}
        </pre>
    </template>
</api-ref>
```
