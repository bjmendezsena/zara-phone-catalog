import { HttpResponse, ResponseResolver } from "msw";
import { mockProductDetailsResponse } from "@/tests/mock";

export const getProductHandler: ResponseResolver = () =>
  HttpResponse.json(mockProductDetailsResponse);
