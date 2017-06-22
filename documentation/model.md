## Pack
Name | Type | Details
-----| ----- | -------
castPackId | string |
assetIds | array |
isArchived | boolean | false

## Component
Name | Type | Details
-----| ----- | -------
name | string |
price | float |
duration | integer | number of days
validStart | datetime | starts at 00:00:00
validEnd | datetime | ends at 23:59:59
pack | N - 1 | Pack
isPublic | boolean | true
isArchived | boolean | false

## Voucher
Name | Type | Details
-----| ----- | -------
component | N - N | Component
merchant | N - 1 | Merchant
isRedeemed | boolean | true
refId | string |

## Merchant
Name | Type | Details
-----| ----- | -------
name | string

## Transaction
Name | Type | Details
-----| ----- | -------
user | N - 1 | User
component | N - N | Component
status | String | "success" \|\| "pending" \|\| "cancel"
paymentID | String | Reference from the payment provider
paymentType | String | "onepay" \|\| "voucher"

## Provision
Name | Type | Details
-----| ----- | -------
user | N - 1 | User
transaction | N - 1 | Transaction
startAt | datetime |
endAt | datetime | Plus 10 mins for grace period.
isRecurring | boolean | false
component | 1 -1 | Component

## Device
Name | Type | Details
-----| ----- | -------
deviceId | string | UATDeviceId
deviceType | string |
deviceModel | string |
user | N-1 | User
accessToken | string | Application Access Token

## User
Name | Type | Details
-----| ----- | -------
email | string |
mobile | integer |
castUserId | string | Casr userId
castUserKey | string | Cast userKey
castToken | string | Cast token
pack | N-N | Pack
