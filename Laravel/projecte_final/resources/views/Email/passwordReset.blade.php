<x-mail::message>
# Change password request

Click on the button below to change password
<x-mail::button :url='$url'>

Reset Password
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
