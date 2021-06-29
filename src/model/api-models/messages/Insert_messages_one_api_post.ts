import { z } from 'zod'
import { Insert_Messages_OneMutation } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'
import { MessageValidationSchema } from '../../schemas/MessageValidationSchema'

export interface Insert_messages_one_api_post {
  input: z.infer<typeof MessageValidationSchema>
  output: Insert_Messages_OneMutation
}

export const insert_messages_one_api_post_Config: ApiConfig = {
  url: '/api/messages/insert_messages_one_api_post',
  method: 'post',
  responseType: 'json',
}