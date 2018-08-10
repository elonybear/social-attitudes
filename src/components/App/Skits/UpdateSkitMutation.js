import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../environment.js';

const mutation = graphql`
  mutation UpdateSkitMutation(
    $input: UpdateSkitInput!
  ) {
    updateSkit(input: $input) {
      skit {
        id,
        title,
        description,
        last_updated
      }
    }
  }
`

export function updateSkit(source, callback) {
  const variables = {
    input: source
  }

  console.log("Updating skit: " + JSON.stringify(source))

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response)
        callback(response.updateSkit.skit);
      },
      onError: err => console.error(err),
    }
  )
}
