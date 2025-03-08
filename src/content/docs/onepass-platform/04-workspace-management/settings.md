---
id: settings
title: Customizing your workspace
sidebar_label: 'Settings'
sidebar_position: 2
tags:
  - Profiles
  - Visibility
  - Organization information
---

## Access tokens

The access tokens of the workspace are tokens you have generated that can be used to access the OnePass API. You can generate a token by:

- sign in to your OnePass account,
- navigate to the "Workspace Settings" page,
- click on the "Access tokens" tab,
- fill the requested information:
  - name of the token (a unique name that may be visible to the resource owners or the users with access)
  - a short descreiption about what is the token for
  - scope of the token (if it will have read, write or admin permissions)
- add an expiry date for the token, if you wish so, and
- click the green "Generate token" button.

After that, your new access token will be shown for you to save it.

:::warning
Please, bear in mind that, for security reasons:

- You will only be able to see the token once, just after generating it. You'll have to save it yourself in a secure place.
- You must NOT share this private key with anyone outside your Organization, or with someone you don't fully trust.

:::

If you want to- sign in to your OnePass account,

- navigate to the "Workspace Settings" page,
- click on the "Access tokens" tab,
- check the list of names generated tokens and identify the one you want to delete,
- click on the trash icon to the right of the name of the token that you want to delete.

## Sender identities

You can add and manage your sender identities to send and receive emails through OnePass to ensure a seamless email experience.

Follow these steps to add a new sender identity and enable OnePass to send emails on your behalf:

- navigate to the "Workspace Settings" page,
- click on the "Sender identities" tab,
- scroll to the bottom of the section and click on the black "Add new email identity" button,
- fill, at least, the compulsory elements of the form that appears:
  - name of the sender
  - email of the sender
- if you wish, you can also specify the email where you want to receive answers and define if this will be the default sender for that workspace,
- click the black "Add" button.

Once created, the status will show to the right of the sender identity name as "Verfied" or "Enabled".

:::caution
Be aware that each sender identity requires verification to prevent abuse and maintain deliverability.

To ensure security and maintain your trust, we require a verification process for each new sender address. This means that, after submitting the form to add a sender, you will receive a verification email from AWS, our email infrastructure providerm, that serves to confirm that you have authorized for the addition of the new sender address and allow us to send emails on your behalf.
:::

:::info
You can delete any sender identity at any point by clicking the trash button that will appear to the right of the sender identity mail. The tick sign next to it will help you enable the identity if you didn't mark as default at the moment of creating it.
:::

[//]: # (Check how to add the forwarding email and add a brief reference)

## email and domain verification

You can verify the domains controlled by your organization to confirm your organization's identity on OnePass. A Verified badge will be added to your organization's profile page if all of the domains displayed on your profile (e.g. public email or website URL) are verified.
[//]: # (Add a domain feature is not working)

In this section, you will also be able to request your business verification.
