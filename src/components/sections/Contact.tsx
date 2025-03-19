import { FC, useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

import { Button } from "primereact/button";
import { Dialog, DialogProps } from "primereact/dialog";

import { TextAreaInput, TextInput } from "components/input";
import { Section, SectionTitle } from "components/sections";

import { ContactFormValues } from "interface/contact";
import { BreakpointHeight } from "interface/enum/Breakpoint";

import { LayoutContext } from "context/layout";
import { useWindowListener } from "hook/useListener";
import { useLocalStorage } from "usehooks-ts";

type MessageStatus = {
  sent: boolean;
  timestamp: Date;
  expiresIn: Date;
};

const ContactSection: FC = () => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;
  const [loading, setLoading] = useState<boolean>(false);

  const [messageStatus, setMessageStatus] = useLocalStorage<MessageStatus>(
    "message-status",
    {
      sent: false,
      timestamp: new Date(),
      expiresIn: new Date(),
    }
  );

  const [defaultValues] = useState<ContactFormValues>({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [visible, setVisible] = useState<boolean>(false);

  const { control, handleSubmit, clearErrors, reset } =
    useForm<ContactFormValues>({ defaultValues });

  const getIsMessageDisabled = useCallback(() => {
    return (
      messageStatus.sent && messageStatus.timestamp < messageStatus.expiresIn
    );
  }, [messageStatus]);

  useWindowListener("load", () => {
    clearErrors();
    reset();
  });

  const onSubmit = async (value: ContactFormValues) => {
    const { VITE_EMAILJS_SERVICE: service, VITE_EMAILJS_TEMPLATE: template } =
      import.meta.env;

    setLoading(true);

    await emailjs.send(service, template, value).then(() => {
      setMessageStatus({
        sent: true,
        timestamp: new Date(),
        expiresIn: new Date(Date.now() + 2.592e8),
      });
      setVisible(true);
    });
  };

  const onHide = () => {
    setVisible(false);
    setLoading(false);
  };

  return (
    <Section id="contact">
      <SuccessDialog visible={visible} onHide={onHide} />
      <SectionTitle title="Contact me" />
      <div
        className={`
          relative
          flex justify-center items-center
          mx-5 mt-3 py-8
          rounded-xl
          bg-violet-blue
          ${breakpointHeight < BreakpointHeight.XL && "max-h-[72vh]"}
          ${breakpointHeight >= BreakpointHeight.XL && "min-h-[75vh]"}
        `}
      >
        <div
          className="
            py-3 px-8 w-1/2 rounded-2xl
            bg-magnolia
          "
        >
          <p className="text-center font-sans text-xl">
            Ask any question, I'll get back to you as soon as I can!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              control={control}
              label="Name"
              name="from_name"
              className="mt-3"
              disabled={getIsMessageDisabled()}
            />
            <TextInput
              control={control}
              label="Email"
              name="from_email"
              className="mt-4"
              pattern={{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              }}
              disabled={getIsMessageDisabled()}
            />
            <TextAreaInput
              control={control}
              label="Message"
              name="message"
              className="mt-4"
              disabled={getIsMessageDisabled()}
            />
            <div className="text-center mt-5 mb-3">
              <Button
                className="relative w-3/4"
                type="submit"
                icon="pi pi-envelope"
                label={getIsMessageDisabled() ? "Message Sent" : "Send Message"}
                disabled={getIsMessageDisabled()}
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

const SuccessDialog: FC<DialogProps> = ({ visible, onHide }) => (
  <Dialog
    visible={visible}
    onHide={onHide}
    draggable={false}
    resizable={false}
    showHeader={false}
    className="max-w-[35%]"
  >
    <div>
      <div
        className="
          pt-5 gap-3
          text-violet-blue
          flex items-center justify-center
        "
      >
        <i className="text-4xl pi pi-check-circle" />
        <span className="text-2xl">Message sent</span>
      </div>
      <p className="text-center pt-4">
        Thanks for reaching out! I will read your message and answer any
        questions ASAP.
      </p>
      <div className="pt-5 flex justify-center">
        <Button className="w-3/4" label={"Accept"} icon="pi" onClick={onHide} />
      </div>
    </div>
  </Dialog>
);

export default ContactSection;
