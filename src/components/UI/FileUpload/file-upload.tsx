import { FileUpload } from "graphql-upload";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  FC
} from "react";
import { blurDataURLShimmer } from "@/lib/shimmer";
import Image from "next/image";
import cn from "classnames";
import { format } from "date-fns";
import { GraphQLErrors } from "@apollo/client/errors";

type Maybe<T> = T | null | undefined;
type Enumerable<T> = T extends infer U
  ? U
  : T | (T extends infer U ? U : T)[];
type UnEnumerate<T> = T extends Array<infer U> ? U : T;

export interface FileUploadFieldProps extends FileUpload {
  target?: Enumerable<File>;
  formId?: number | null;
  className?: string;
  viewerId?: string;
  fieldErrors?: GraphQLErrors;
}

const DEFAULT_FILE_STATE = [] as Maybe<File>[];

export const getBase64Value = (
  img: File | Blob,
  callback: (imageBase64Value: string) => void
) => {
  const reader = new FileReader();

  reader.readAsDataURL(img);

  reader.onload = e => {
    console.log(
      JSON.stringify(
        {
          total: e.total,
          target: e.target,
          loaded: e.loaded
        },
        null,
        2
      )
    );
    callback(reader.result as string);
  };
};

export const fileSizeValidator = (
  size: File["size"] | Blob["size"]
): boolean => {
  // convert to MB in binary form: 2**10 bytes = 1024 bytes = 1 GB;
  // 2**20 bytes = 1024**2 = 1MB * 10 = 10MB
  // 10 MB Max; size < 1 ? true : false;
  return size / 1024 / 1024 / 10 < 1;
};

export const fileTypeValidator = (
  type: File["type"] | Blob["type"]
): boolean => {
  return (
    type === "image/jpeg" ||
    type === "image/jpg" ||
    type === "image/png" ||
    type === "image/gif"
  );
};

const FileUploadComponent: FC<FileUploadFieldProps> = ({
  className,
  children,
  createReadStream,
  encoding,
  filename,
  mimetype,
  formId,
  target,
  fieldErrors,
  viewerId
}) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageBase64Value, setImageBase64Value] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | Error | null>();
  const [size, setSize] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [modified, setModified] = useState<number>(0);
  const [description, setDescription] = useState<string | null>("");
  const fileValue = DEFAULT_FILE_STATE;

  const [fieldValueState, setFieldValueState] = useState<
    UnEnumerate<typeof DEFAULT_FILE_STATE>
  >(DEFAULT_FILE_STATE[0]);

  const handleImageUpload = useCallback(
    <T extends File>(file: Maybe<T>) => {
      if (!file) {
        setImageLoading(true);
        return;
      }

      if (file) {
        setModified(file.lastModified);
        setSize(file.size);
        setType(file.type);
        setName(file.name);
        setFieldValueState(file);
        return getBase64Value(file, imageBase64Value => {
          setImageBase64Value(imageBase64Value);
          setImageLoading(false);
        });
      }
    },
    []
  );

  const [fileUploadShape, setFileUploadShape] = useState<{
    type: string | undefined;
    fieldValue: {
      fileUploadValues: (File | null | undefined)[];
    };
  }>();
  const handleUploadChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let targetFile =
      e.currentTarget.files && e.currentTarget.files.item(0);
    targetFile !== null &&
    handleImageUpload(targetFile) &&
    fieldValueState !== targetFile
      ? setFieldValueState(targetFile)
      : setFieldValueState(targetFile);

    console.log(fileValue.push(e.currentTarget.files?.item(0)).toString());
    console.log({ ...(fileValue ?? "") });
    return setFileUploadShape({
      type: targetFile?.type,
      fieldValue: {
        fileUploadValues: [e.currentTarget.files?.item(0)]
      }
    });
  };
  const photoSVG = (
    <svg
      stroke='currentColor'
      fill='none'
      viewBox='0 0 48 48'
      aria-hidden='true'>
      <path
        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
  return (
    <div>
      <div>
        <div>
          <div>
            <label
              htmlFor={
                viewerId ? viewerId : new Date(Date.now()).toUTCString()
              }>
              <span>{"Upload a File"}</span>
              <input
                id={
                  viewerId ? viewerId : new Date(Date.now()).toUTCString()
                }
                accept='*'
                type='file'
                onChangeCapture={e => {
                  const targetFile =
                    e.currentTarget.files && e.currentTarget.files.item(0);

                  targetFile !== null && handleImageUpload(targetFile);
                }}
                onChange={handleUploadChangeEvent}
              />
              <div>
                {imageLoading ? (
                  <Image
                    src={blurDataURLShimmer({ w: 200, h: 100 })}
                    placeholder='blur'
                    blurDataURL={blurDataURLShimmer({ w: 200, h: 100 })}
                    objectFit={"scale-down"}
                    layout='responsive'
                    className='relative object-bottom object-contain '
                    width={200}
                    height={100}
                    alt={blurDataURLShimmer({ w: 200, h: 100 })}
                  />
                ) : !imageLoading && imageBase64Value ? (
                  <div>
                    <Image
                      src={imageBase64Value}
                      placeholder='blur'
                      blurDataURL={blurDataURLShimmer({ w: 200, h: 100 })}
                      objectFit={"cover"}
                      layout='responsive'
                      className='relative object-bottom object-cover '
                      width={400}
                      height={200}
                      alt={blurDataURLShimmer({ w: 200, h: 100 })}
                    />
                  </div>
                ) : (
                  <div>{photoSVG}</div>
                )}
              </div>
            </label>
          </div>
          <p>{"PNG, JPG, JPEG, or GIF up to 10MB"}</p>
          <p>
            <span
              className={cn(
                size !== 0
                  ? fileSizeValidator(size)
                    ? "text-[#424242]"
                    : "text-red-900"
                  : "text-[#424242]"
              )}>{`size: ${
              size !== 0
                ? (size / 1024 / 1024).toPrecision(4) + " MB"
                : "--"
            }`}</span>
            <span
              className={cn(
                type !== ""
                  ? fileTypeValidator(type)
                    ? "text-[#424242]"
                    : "text-red-900"
                  : "text-[#424242]"
              )}>{`type: ${type !== "" ? type : "--"}`}</span>
            <span className={"sr-only"}>{`${
              name !== "" ? name : "--"
            }`}</span>
            <span className={"sr-only"}>{`${
              modified !== 0
                ? format(modified, "LL/dd/yyyy") +
                  " at " +
                  format(modified, "h:mm aaa") +
                  format(modified, " O")
                : "--"
            }`}</span>
          </p>
        </div>
      </div>
      {fileUploadShape ? (
        <p className='field-description not-sr-only'>
          {fileUploadShape ?? ""}
        </p>
      ) : null}
      {fieldErrors?.length
        ? fieldErrors.map((fieldError, j) => (
            <p key={(++j) ** j + 2} className='error-message'>
              {fieldError?.message ?? error}
            </p>
          ))
        : null}
    </div>
  );
};

export default FileUploadComponent;
