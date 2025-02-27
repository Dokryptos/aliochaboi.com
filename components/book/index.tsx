"use client";
import type BookType from "@/types/book";
import { UIImageSanity } from "../ui/image/sanity";
import Grid from "@/components/ui/grid/index";
import { motion } from "framer-motion";

interface BookDataProps {
  bookArray: BookType[];
}

const gridAnimationVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.2, duration: 1 },
  }),
};

export default function BookComponent({ bookArray }: BookDataProps) {
  return (
    <div className="h-dvh overflow-y-scroll w-full pt-[84px] pr-5 pl-5">
      <Grid className="text-[16px]/[21px] tablet:gap-5">
        {bookArray.map((book: BookType, i: number) => (
          <motion.div
            custom={i}
            initial="hidden"
            animate="visible"
            variants={gridAnimationVariant}
            key={book._id}
            className="pb-6 col-span-4 tablet:col-span-3 laptop:col-span-4"
          >
            <a href={book.link} target="_blank">
              <UIImageSanity
                asset={book.thumbnail.asset}
                className="pb-3"
                alt={`${book.title}`}
              />
              <div>
                <p>
                  {book.title}, {book?.details}
                </p>
                <p>
                  Product by <i>{book.productBy}</i>
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </Grid>
    </div>
  );
}
