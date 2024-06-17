import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const NewsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    window.alert(`Данные ${data} отправлены, скоро с вами свяжутся`);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="desk:flex desk:h-[60px] desk: justify-between"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" bg-white desk:mr-[17px] desk:mb-0 desk:h-full desk:w-full desk:max-w-[500px] px-[16px] py-[5px] rounded-md mb-[20px] bg-opacity-20">
              <FormLabel className=" p-0 m-0 text-[12px] text-white text-opacity-40  h-fit">
                Your email address
              </FormLabel>
              <FormControl>
                <Input
                  className="text-orange bg-transparent placeholder:text-orange pl-0 py-0 my-0 border-0 h-fit"
                  placeholder="aliciliniavopir@gmail.com"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full desk:px-[70px] desk:py-[20px] desk:w-fit desk:h-full bg-orange text-black"
        >
          Subscribe now
        </Button>
      </form>
    </Form>
  );
};

export default NewsForm;
