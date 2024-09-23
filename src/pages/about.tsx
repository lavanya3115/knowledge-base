import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import CustomButton from "@/components/customButton";
import DropDown from "@/components/dropDown";
import DragUpload from "@/components/DragUpload";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <CustomButton />
          <div>
            <DropDown />
          </div>
          <div>
            <DragUpload />
          </div>
        </div>
      </section>
      
    </DefaultLayout>
  );
}
