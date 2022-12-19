import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";

const userFilters = [
  <TextInput source="q" label="Search" alwaysOn />,

  <ReferenceInput source="city" reference="users">
    <AutocompleteInput
      optionText={(choice) => (choice?.id ? `${choice.city}` : "")}
    />
  </ReferenceInput>,
];

export const UsersList = () => (
  <List filters={userFilters}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="city" />
      <DateField label="Publication date"></DateField>
    </Datagrid>
  </List>
);
