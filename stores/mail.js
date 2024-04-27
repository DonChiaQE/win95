import { defineStore } from 'pinia'

export const useMailStore = defineStore('mail', {
    state: () => ({
        mailContent: "",
        mailSender: "",
        mailSubject: "New Message",
    }),
    actions: {
        setMailContent(content) {
            this.mailContent = content
        },
        setMailSender(sender) {
            this.mailSender = sender
        },
        setMailSubject(subject) {
            this.mailSubject = subject
        },
        resetMail() {
            this.mailContent = ""
            this.mailSender = ""
            this.mailSubject = "New Message"
        }
    }
})